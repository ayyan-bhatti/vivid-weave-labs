import { useEffect, useRef } from 'react';

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width: number;
}

export default function TradingCandlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const generateCandles = (count: number, w: number, h: number): Candle[] => {
      const candles: Candle[] = [];
      const candleWidth = w / count;
      let price = h * 0.5;

      for (let i = 0; i < count + 10; i++) {
        const volatility = Math.random() * h * 0.08;
        const direction = Math.random() > 0.45 ? 1 : -1;
        const body = volatility * (0.3 + Math.random() * 0.7);
        const open = price;
        const close = price + direction * body;
        const wickUp = Math.max(open, close) + Math.random() * volatility * 0.5;
        const wickDown = Math.min(open, close) - Math.random() * volatility * 0.5;

        candles.push({
          x: i * candleWidth,
          open,
          close,
          high: wickUp,
          low: wickDown,
          width: candleWidth * 0.6,
        });

        price = close;
        // Mean revert
        price += (h * 0.5 - price) * 0.03;
      }
      return candles;
    };

    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    const candles = generateCandles(40, w, h);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.04)';
      ctx.lineWidth = 1;
      for (let y = 0; y < h; y += h / 8) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const candleWidth = w / 40;

      candles.forEach((c) => {
        const x = c.x - offset;
        if (x < -candleWidth * 2 || x > w + candleWidth * 2) return;

        const bullish = c.close < c.open; // canvas y is inverted
        const color = bullish
          ? 'rgba(34, 197, 94, 0.15)'
          : 'rgba(239, 68, 68, 0.12)';
        const wickColor = bullish
          ? 'rgba(34, 197, 94, 0.1)'
          : 'rgba(239, 68, 68, 0.08)';

        // Wick
        ctx.strokeStyle = wickColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x + c.width / 2, c.high);
        ctx.lineTo(x + c.width / 2, c.low);
        ctx.stroke();

        // Body
        ctx.fillStyle = color;
        const top = Math.min(c.open, c.close);
        const bodyHeight = Math.abs(c.close - c.open) || 1;
        ctx.fillRect(x, top, c.width, bodyHeight);
      });

      offset += 0.15;
      if (offset > candleWidth) offset = 0;

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}
