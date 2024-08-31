import { render } from '@testing-library/react';

import MonitoringActivitiesPanel from './MonitoringActivitiesPanel';

describe('MonitoringActivitiesPanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonitoringActivitiesPanel />);
    expect(baseElement).toBeTruthy();
  });
});
