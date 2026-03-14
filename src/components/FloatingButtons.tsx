import { MessageCircle, CalendarDays } from "lucide-react";

const FloatingButtons = () => (
  <>
    {/* WhatsApp */}
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-40 w-14 h-14 bg-[hsl(142,70%,45%)] text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    >
      <MessageCircle className="w-6 h-6" />
    </a>

  </>
);

export default FloatingButtons;
