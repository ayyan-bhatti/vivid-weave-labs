import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

const data = [
  { month: 'Jan', value: 93000 },
  { month: 'Feb', value: 96200 },
  { month: 'Mar', value: 94800 },
  { month: 'Apr', value: 101500 },
  { month: 'May', value: 98700 },
  { month: 'Jun', value: 105200 },
  { month: 'Jul', value: 108900 },
  { month: 'Aug', value: 106400 },
  { month: 'Sep', value: 112800 },
  { month: 'Oct', value: 118200 },
  { month: 'Nov', value: 121500 },
  { month: 'Dec', value: 124840 },
];

const periods = ['1M', '3M', 'YTD'];

export default function PerformanceChart() {
  const [activePeriod, setActivePeriod] = useState('YTD');
  const visibleData = activePeriod === '1M' ? data.slice(-1) : activePeriod === '3M' ? data.slice(-3) : data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7 }}
      className="container mx-auto px-6 -mt-10 relative z-10"
    >
      <div className="bg-card rounded-2xl border border-border p-6 sm:p-8" style={{ boxShadow: 'var(--shadow-card)' }}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs text-muted-foreground tracking-widest uppercase">Portfolio Performance — YTD</p>
            <div className="flex items-baseline gap-3 mt-1">
              <span className="text-3xl font-heading font-bold text-foreground">$124,840.00</span>
              <span className="text-sm font-semibold text-primary">↑ +34.2%</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-secondary rounded-lg p-1">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  activePeriod === p
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={visibleData}>
              <defs>
                <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(38, 75%, 55%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(38, 75%, 55%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 10%, 50%)', fontSize: 12 }} />
              <YAxis hide />
              <Tooltip
                contentStyle={{
                  background: 'hsl(220, 18%, 10%)',
                  border: '1px solid hsl(220, 15%, 20%)',
                  borderRadius: '8px',
                  color: 'hsl(40, 20%, 92%)',
                  fontSize: 13,
                }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Portfolio']}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(38, 75%, 55%)"
                strokeWidth={2.5}
                fill="url(#goldGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}
