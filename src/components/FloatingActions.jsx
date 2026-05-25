import { MessageCircle, Send } from "lucide-react";

export default function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact links">
      <a href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Open WhatsApp">
        <MessageCircle size={22} />
      </a>
      <a href="https://t.me/" target="_blank" rel="noreferrer" aria-label="Open Telegram">
        <Send size={22} />
      </a>
    </div>
  );
}
