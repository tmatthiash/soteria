import React from 'react';
import { SoteriaMount } from '../../../Test/SoteriaMount';
import { HomePage } from '../HomePage';

describe('when the home page loads', () => {
  let soteriaMount: SoteriaMount;

  beforeEach(async () => {

    soteriaMount = await new SoteriaMount(
      (
        <HomePage />
      )
    ).initialize();
  });

  it('should display the list view', () => {
    expect(soteriaMount.getComponent().find('.list-view').exists()).toBe(true);
    expect(soteriaMount.getComponent().find('.new-view').exists()).toBe(false);
  });

  describe('when new view tab is selected', () => {
    beforeEach(async () => {
      await soteriaMount.dispatch({
        type: 'SET_TAB_SELECTED',
        tabSelected: 'new',
      });
    });

    it('should display the new view', () => {
      expect(soteriaMount.getComponent().find('.new-view').exists()).toBe(true);
      expect(soteriaMount.getComponent().find('.list-view').exists()).toBe(false);
    });
  });
});