import React from "react";
import { addToast, ToastProvider } from "@heroui/toast";
import { Button } from "@heroui/button";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [placement, setPlacement] = React.useState("bottom-right");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col gap-6 max-w-lg text-center justify-center">
          <h1 className={title()}>Pricing</h1>
          <div className="fixed z-[100]">
            <ToastProvider
              placement={placement}
              toastOffset={placement.includes("top") ? 60 : 0}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              ["Top Left", "top-left"],
              ["Top Center", "top-center"],
              ["Top Right", "top-right"],
              ["Bottom Left", "bottom-left"],
              ["Bottom Center", "bottom-center"],
              ["Bottom Right", "bottom-right"],
            ].map((position) => (
              <Button
                key={position[1]}
                variant={"flat"}
                onPress={() => {
                  setPlacement(position[1]);
                  addToast({
                    title: "Toast title",
                    description: "Toast displayed successfully",
                  });
                }}
              >
                {position[0]}
              </Button>
            ))}
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
