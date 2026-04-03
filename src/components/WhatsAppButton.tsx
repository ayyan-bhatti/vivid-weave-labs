import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/your-channel-link"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,71%,45%)] text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      title="Join our WhatsApp Channel"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}
