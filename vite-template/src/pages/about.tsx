import React from "react";
import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody } from "@heroui/card";
import { RadioGroup, Radio } from "@heroui/radio";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function DocsPage() {
  const [placement, setPlacement] = React.useState("top");

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>About</h1>
          <div className="flex flex-col px-4">
            <RadioGroup
              className="mb-4"
              label="Placement"
              value={placement}
              onValueChange={(value) => setPlacement(value)}
            >
              <Radio value="top">top</Radio>
              <Radio value="bottom">bottom</Radio>
              <Radio value="start">start</Radio>
              <Radio value="end">end</Radio>
            </RadioGroup>
            <div className="flex w-full flex-col">
              <Tabs aria-label="Options" placement={placement}>
                <Tab key="photos" title="Photos">
                  <Card>
                    <CardBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="music" title="Music">
                  <Card>
                    <CardBody>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur.
                    </CardBody>
                  </Card>
                </Tab>
                <Tab key="videos" title="Videos">
                  <Card>
                    <CardBody>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </CardBody>
                  </Card>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
