import React from 'react';
import { SoteriaMount } from '../../../TestUtils/SoteriaMount';
import { MultiSelect, MultiselectMenuOption } from '../MultiSelect';

describe('when page is loaded and button is clicked (and first option ' +
  'is selected)', () => {
  let soteriaMount: SoteriaMount;
  let mockOnChange: jest.Mock;
  const options: MultiselectMenuOption[] = [{
    label: 'base 1',
    value: 'base 1',
  }, {
    label: 'base 2',
    value: 'base 2',
  }, {
    label: 'base 3',
    value: 'base 3',
  }];

  beforeEach(async () => {
    mockOnChange = jest.fn();

    soteriaMount = await new SoteriaMount(
      <MultiSelect
        onChange={mockOnChange}
        initiallySelectedValues={[options[0].value]}
        menuOptions={options}
        labelText='Testing'
      />
    ).initialize();

    await soteriaMount.interact((component) => {
      component.find('.multiselect').simulate('click');
    });
  });

  it('should display correct quantity options ', () => {
    expect(soteriaMount.getComponent().find('.multiselect-dropdown-option'))
      .toHaveLength(3);
  });

  it('should display correct labels for options', () => {
    expect(soteriaMount.getComponent().find('.multiselect-dropdown-option')
      .at(0).text()).toEqual(options[0].label);
    expect(soteriaMount.getComponent().find('.multiselect-dropdown-option')
      .at(1).text()).toEqual(options[1].label);
    expect(soteriaMount.getComponent().find('.multiselect-dropdown-option')
      .at(2).text()).toEqual(options[2].label);
  });

  it('first option should have selected value', () => {
    expect(soteriaMount.getComponent().find('.multiselect-dropdown-option').at(0)
      .hasClass('multiselect-dropdown-option__selected')).toBe(true);
  });

  describe('when options are changed', () => {
    beforeEach(async () => {
      await soteriaMount.interact((component) => {
        component.find('.multiselect-dropdown-option').at(0).simulate('click');
      });
      await soteriaMount.interact((component) => {
        component.find('.multiselect-dropdown-option').at(1).simulate('click');
      });
    });

    it('on clicked, previously selected options should not be selected', () => {
      expect(soteriaMount.getComponent().find('.multiselect-dropdown-option').at(0)
        .hasClass('multiselect-dropdown-option__selected')).toBe(false);
    });

    it('on clicked, previously selected options should now be selected', () => {
      expect(soteriaMount.getComponent().find('.multiselect-dropdown-option').at(1)
        .hasClass('multiselect-dropdown-option__selected')).toBe(true);
    });

    describe('When the multiselect is closed', () => {
      beforeEach(async () => {
        await soteriaMount.interact((component) => {
          component.find('.multiselect').simulate('click');
        });
      });

      it('save the changed values', () => {
        expect(mockOnChange).toHaveBeenCalledWith(['base 2']);
      });
    });
  });
});