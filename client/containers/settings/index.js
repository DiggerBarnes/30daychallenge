import React, { PureComponent } from 'react';
import Layout from '../../components/layout';

import { save1RMs, get1RMs } from '../../modules/session';
import { getFields, getModel } from './utils';


class Settings extends PureComponent {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const model = getModel(this.refs);
    save1RMs(model);
  }

  render() {
    const defaultModel = get1RMs();

    const controls = getFields().map((item) => {
      const defaultValue = defaultModel && defaultModel[item.key];

      return (
        <div className="form-group" key={item.key}>
          <label>{item.label}</label>
          <input ref={item.key} type="number" className="form-control" placeholder="100kg" defaultValue={defaultValue} />
        </div>
      );
    });

    return (
      <Layout>
        <h1>Settings</h1>
        <form onSubmit={this.handleSubmit}>
          {controls}
          <button type="submit" className="btn btn-primary btn-block">Save</button>
        </form>
      </Layout>
    );
  }
}

export default Settings;
