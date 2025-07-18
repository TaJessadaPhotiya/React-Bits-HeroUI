import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Pagination } from "@heroui/pagination";
import PhotoGallery from "./PhotoGallery";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex flex-col gap-8 max-w-5xl w-full text-center items-center justify-center">
          <h1 className={title()}>Pricing</h1>
          <Pagination showControls initialPage={1} total={10} />

          <div className="w-full mt-10">
            <PhotoGallery />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
