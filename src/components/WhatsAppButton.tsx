import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TelegramButton() {
  return (
    <motion.a
      href="https://t.me/capitalcrewofficial"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ backgroundColor: '#0088cc' }}
      title="Join our Telegram Channel"
    >
      <Send className="w-5 h-5 text-white" />
    </motion.a>
  );
}
