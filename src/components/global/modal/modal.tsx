import React, { useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  open: boolean;
  onClose: (val: boolean) => void;
  zIndex?: string;
  className?: string;
}

const Modal: React.FC<Props> = ({
  children,
  open,
  onClose,
  zIndex = "z-10",
  className,
}) => {
  const [isOpen, setOpen] = useState(open);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <Dialog
      className={cn("relative", zIndex)}
      open={isOpen}
      onClose={(val) => onClose(val)}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-70 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          className={
            "flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
          }
        >
          <DialogPanel
            transition
            className={cn(
              "relative transform w-fit overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
