import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import MissionItem from '../../components/MissionItem';
import { withProvider, withTable } from '../../utils/testUtils';
import { joinMission, leaveMission } from '../../redux/missions/missionsSlice';

const mockStore = configureStore([]);

describe('testing MissionItem component', () => {
  test('render', () => {
    const tree = renderer.create(withProvider(withTable(<MissionItem id="1" name="Misison1" description="Mission1 description" reserved={false} />))).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('dispatches the joinMission action', () => {
    // Arrange
    const store = mockStore({ });
    render(
      withProvider(
        withTable(
          <MissionItem
            id="1"
            name="Mission1"
            description="Mission1 description"
            reserved={false}
          />,
        ), store,
      ),
    );

    // Act
    store.dispatch(joinMission({ id: '1' }));

    // Assert
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(joinMission({ id: '1' }));
  });

  test('dispatches the leaveMission action', () => {
    // Arrange
    const store = mockStore({ });
    render(
      withProvider(
        withTable(
          <MissionItem
            id="1"
            name="Mission1"
            description="Mission1 description"
            reserved={false}
          />,
        ), store,
      ),
    );

    // Act
    store.dispatch(leaveMission({ id: '1' }));

    // Assert
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(leaveMission({ id: '1' }));
  });

  test('clicks the button and dispatches the joinMission action', () => {
    // Arrange
    const store = mockStore({});
    render(
      withProvider(
        withTable(
          <MissionItem
            id="1"
            name="Mission1"
            description="Mission1 description"
            reserved={false}
          />,
        ), store,
      ),
    );
    const button = screen.getByTestId('mission-1-button');

    // Act
    userEvent.click(button);

    // Assert
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(joinMission({ id: '1' }));
  });

  test('clicks the button and dispatches the leave action', () => {
    // Arrange
    const store = mockStore({});
    render(
      withProvider(
        withTable(
          <MissionItem
            id="1"
            name="Mission1"
            description="Mission1 description"
            reserved
          />,
        ), store,
      ),
    );
    const button = screen.getByTestId('mission-1-button');

    // Act
    userEvent.click(button);

    // Assert
    const actions = store.getActions();
    expect(actions).toHaveLength(1);
    expect(actions[0]).toEqual(leaveMission({ id: '1' }));
  });
});
