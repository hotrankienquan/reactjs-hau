import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseTwo, increase } from './counterSlice';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

// export default function Hook() {
//   const classes = useStyles();
//   return <Button className={classes.root}>Hook</Button>;
// }
Counter.propTypes = {};

function Counter(props) {
  const classes = useStyles();
  // useSelector là 1 cái hook dùng để lấy state trong redux
  const count = useSelector((state) => state.ten_tu_dat);
  const dispatch = useDispatch();
  const handleIncrease = () => {
    const hanhdong = increase();
    console.log(hanhdong);
    dispatch(hanhdong);
  };
  const handleDeTwo = () => {
    dispatch(decreaseTwo());
  };
  return (
    <div>
      COunter feature
      <p> {count}</p>
      <div>
        <Button className={classes.root} onClick={handleIncrease}>
          increase
        </Button>
        <Button className={classes.root} onClick={handleDeTwo}>
          Decrease two
        </Button>
      </div>
    </div>
  );
}

export default Counter;
