// eslint-disable-next-line import/no-extraneous-dependencies
import { mount, ReactWrapper } from "enzyme";
import * as React from "react";
import { Provider } from "react-redux";
import { createStore, Store } from 'redux';
import { act } from "react-dom/test-utils";
import { Action } from "../Store/action"
import { AppState } from '../Store/AppState';
import { defaultState, Reducer } from '../Store/reducer';

export type SoteriaInteraction = (wrapper: ReactWrapper) => void;
export class SoteriaMount {
  private readonly soteriaStore: Store<AppState, Action>;

  private readonly node: React.ReactElement;

  private component: ReactWrapper;

  constructor(node: React.ReactElement) {
    this.soteriaStore = createStore(Reducer, defaultState)
    this.node = node;
    this.component = mount(<div>COMPONENT NOT MOUNTED. DID YOU REMEMBER TO CALL INITIALIZE?</div>);
  }

  public async initialize() {
    await act(async () => {
      this.component = mount(
        <Provider store={this.soteriaStore}>
          {this.node}
        </Provider>
      );
    });

    this.component.update();

    return this;
  }

  public async interact(interaction: SoteriaInteraction) {
    await act(async () => {
      interaction(this.component);
    });
    this.component.update();
  }

  public getComponent() {
    return this.component;
  }

  public getStore() {
    return this.soteriaStore;
  }

  public async setProps(props: object) {
    await act(async () => {
      this.component = mount(
        <Provider store={this.soteriaStore}>
          {React.cloneElement(this.node, props)}
        </Provider>
      );
    });

    this.component.update();
  }

  public async dispatch(action: Action) {
    await act(async () => {
      await this.getStore().dispatch(action);
    });

    this.component.update();
  }

  public unmount() {
    this.component.unmount();
  }
}
