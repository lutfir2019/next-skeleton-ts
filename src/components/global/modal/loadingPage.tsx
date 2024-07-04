"use client";

import Modal from "./modal";
import { useLoading } from "@/stores/useLoading";

const LoadingPage = () => {
  const loadingStore = useLoading();

  return (
    <Modal
      open={loadingStore.is_loading ?? false}
      onClose={(_) => {}}
      zIndex="z-50"
    >
      <div className="relative bg-slate-100 p-3 rounded-md w-fit">
        <div className="w-20 h-20 border-[0.5rem] border-blue-700 rounded-full animate-spin border-t-slate-300 border-r-slate-300"></div>
      </div>
    </Modal>
  );
};

export default LoadingPage;
