import { useEffect, useRef } from 'react';

interface Candle {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  width: number;
  speed: number;
}

export default function TradingCandlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let W = 0;
    let H = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // Generate multiple layers of candles
    const generateCandles = (count: number, baseY: number, amplitude: number, candleW: number): Candle[] => {
      const candles: Candle[] = [];
      let price = baseY;
      for (let i = 0; i < count; i++) {
        const vol = Math.random() * amplitude;
        const dir = Math.random() > 0.42 ? -1 : 1; // inverted for canvas Y
        const body = vol * (0.3 + Math.random() * 0.7);
        const open = price;
        const close = price + dir * body;
        const high = Math.min(open, close) - Math.random() * vol * 0.5;
        const low = Math.max(open, close) + Math.random() * vol * 0.5;
        candles.push({
          x: i * (candleW + 3),
          open, close, high, low,
          width: candleW,
          speed: 0.2 + Math.random() * 0.3,
        });
        price = close + (baseY - close) * 0.02;
      }
      return candles;
    };

    const layers = [
      { candles: generateCandles(80, H * 0.35, H * 0.06, 12), alpha: 0.12, offset: 0 },
      { candles: generateCandles(60, H * 0.55, H * 0.08, 16), alpha: 0.18, offset: 0 },
      { candles: generateCandles(50, H * 0.7, H * 0.05, 10), alpha: 0.08, offset: 0 },
    ];

    // Draw grid
    const drawGrid = () => {
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 60;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    };

    // Draw a moving line chart overlay
    let linePhase = 0;
    const drawLineChart = () => {
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.06)';
      ctx.lineWidth = 2;
      for (let x = 0; x < W; x += 3) {
        const y = H * 0.4 + Math.sin((x + linePhase) * 0.008) * H * 0.12 + Math.sin((x + linePhase) * 0.02) * H * 0.04;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second line
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(234, 179, 8, 0.04)';
      ctx.lineWidth = 1.5;
      for (let x = 0; x < W; x += 3) {
        const y = H * 0.6 + Math.sin((x + linePhase * 0.7) * 0.01) * H * 0.08 + Math.cos((x + linePhase) * 0.015) * H * 0.03;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      drawLineChart();

      layers.forEach((layer) => {
        layer.offset += 0.15;
        const totalW = layer.candles.length * (layer.candles[0].width + 3);
        const wrappedOffset = layer.offset % totalW;

        layer.candles.forEach((c) => {
          let x = c.x - wrappedOffset;
          if (x < -c.width * 2) x += totalW;
          if (x > W + c.width * 2) return;

          const bullish = c.close < c.open;
          const greenA = layer.alpha;
          const redA = layer.alpha * 0.8;

          // Wick
          ctx.strokeStyle = bullish ? `rgba(34, 197, 94, ${greenA * 0.7})` : `rgba(239, 68, 68, ${redA * 0.7})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x + c.width / 2, c.high);
          ctx.lineTo(x + c.width / 2, c.low);
          ctx.stroke();

          // Body
          ctx.fillStyle = bullish ? `rgba(34, 197, 94, ${greenA})` : `rgba(239, 68, 68, ${redA})`;
          const top = Math.min(c.open, c.close);
          const bodyH = Math.max(Math.abs(c.close - c.open), 1);
          ctx.fillRect(x, top, c.width, bodyH);
        });
      });

      linePhase += 0.5;
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
      style={{ opacity: 0.7 }}
    />
  );
}
