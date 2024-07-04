"use client";

import { useEffect, useState } from "react";
import { useLayout } from "@/stores/useLayout";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { cn } from "@/lib/utils";
import Modal from "./modal";

type variant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

const NotificationPage = () => {
  const layoutStore = useLayout();
  const [variant, setVariant] = useState<variant>("default");
  useEffect(() => {
    if (layoutStore.type == "error") {
      setVariant("destructive");
    } else {
      setVariant("outline");
    }
  }, [layoutStore]);
  return (
    <Modal
      open={layoutStore.show ?? false}
      onClose={() => layoutStore.setLayout({ show: false })}
      className="bg-transparent"
      zIndex="z-50"
    >
      <div className="flex flex-col justify-start gap-2 bg-white min-w-96 p-3 rounded-md max-w-xs mx-auto mt-20 md:max-w-sm lg:max-w-md xl:max-w-lg">
        <div className="flex justify-center w-full">
          <Info color={cn({ red: layoutStore.type == "error" })} size={70} />
        </div>
        <div
          className={cn("text-black px-5", {
            "text-red-500": layoutStore.type == "error",
          })}
        >
          <p className="text-lg font-semibold mb-2">{layoutStore.title}</p>
          <p className="text-sm mb-4">{layoutStore.message}</p>
        </div>
        <Button
          variant={variant}
          onClick={() => layoutStore.setLayout({ show: false })}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default NotificationPage;
