import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};
// alt + shifft + O : optimize import
function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
