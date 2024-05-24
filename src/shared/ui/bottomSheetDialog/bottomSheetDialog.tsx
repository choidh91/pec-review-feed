import { XMarkIcon } from '@heroicons/react/24/outline';

interface BottomSheedDialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

export const BottomSheetDialog = ({ title, content, onClose }: BottomSheedDialogProps) => {
  return (
    <div className="w-full h-full flex flex-col bg-slate-400 bg-opacity-40 fixed top-0 left-0">
      <div className="bg-white w-full relative p-10 mt-auto flex flex-col box-border max-h-screen rounded-t-3xl mb-14 ">
        <header className="flex flex-row min-h-7 mb-12">
          <span className="flex flex-1 text-cyan-950">{title}</span>
          <XMarkIcon className="size-10" onClick={onClose}></XMarkIcon>
        </header>
        {content}
      </div>
    </div>
  );
};
