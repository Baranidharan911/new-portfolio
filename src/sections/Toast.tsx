import { Check } from 'lucide-react';

interface ToastProps {
  show: boolean;
  message: string;
}

const Toast = ({ show, message }: ToastProps) => {
  return (
    <div 
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#161622] border border-[rgba(99,102,241,0.15)] rounded-xl px-7 py-4 flex items-center gap-3.5 text-[#f1f5f9] text-[15px] z-[10000] transition-all duration-400 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-[100px] opacity-0'
      }`}
    >
      <div className="w-7 h-7 bg-[#22c55e] rounded-full flex items-center justify-center text-white">
        <Check size={16} strokeWidth={3} />
      </div>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
