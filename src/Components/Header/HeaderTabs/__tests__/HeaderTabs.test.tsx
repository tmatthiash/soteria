import React from 'react';
import { SoteriaMount } from '../../../../Test/SoteriaMount';
import { HeaderTabs } from '../HeaderTabs';

describe('when the header tabs load', () => {
    let soteriaMount: SoteriaMount;

    beforeEach(async () => {

      soteriaMount = await new SoteriaMount(
        (
          <HeaderTabs />
        )
      ).initialize();
    });

    it('should display two tabs', () => {
      expect(soteriaMount.getComponent().find('.header-tabs-button')).toHaveLength(2);
    });

    it('should have the 1st tab have the \'selected\' CSS', () => {
      expect(soteriaMount.getComponent().find('.header-tabs-button').at(0)
        .hasClass('header-tabs-button__selected')).toBe(true);
    });

    it('should have the \'selectedTab\' property in redux set to \'list\'', () => {
      expect(soteriaMount.getStore().getState().tabSelected).toEqual('list');
    });

    describe('when you click the 2nd tab', () => {
      beforeEach(async () => {
        await soteriaMount.interact((component) => {
          component.find('.header-tabs-button').at(1)
            .simulate('click');
        });
      });
      
      it('should have the 2nd tab have the \'selected\' CSS', () => {
        expect(soteriaMount.getComponent().find('.header-tabs-button').at(1)
          .hasClass('header-tabs-button__selected')).toBe(true);
      });

      it('should have the \'selectedTab\' property in redux set to \'new\'', () => {
        expect(soteriaMount.getStore().getState().tabSelected).toEqual('new');
      });
    });
  }
);