import React from "react";
import { SoteriaMount } from '../../../../Test/SoteriaMount';
import { HeaderTabs } from '../HeaderTabs';

describe("when the header tabs load", () => {
  let soteriaMount: SoteriaMount;

  beforeEach(async () => {

    soteriaMount = await new SoteriaMount(
      (
        <HeaderTabs />
      )
    ).initialize();
  });


    it("should display two tabs", () => {
      expect(soteriaMount.getComponent().find(".header-tabs-button")).toHaveLength(2);
    })


  }
)