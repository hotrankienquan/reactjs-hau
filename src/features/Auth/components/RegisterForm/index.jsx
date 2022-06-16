import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/form-controls/InputField';
import InputField from 'components/form-controls/InputField';

import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PasswordField from 'components/form-controls/PasswordField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    position: 'relative',
    // 1 đơn vị là 8px
  },
  avatar: {
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
  },
  title: {
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  progress: {
    position: 'absolute',
    top: theme.spacing(1),
    width: '100%',
  },
}));
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const classes = useStyles();
  const schema = yup
    .object()
    .shape({
      fullName: yup
        .string()
        .required('please enter your fullname')
        .test('at least 2 words', 'please enter at least 2 words', (value) => {
          return value.split(' ').length >= 2;
        }),
      email: yup.string().email('Please enter a valid email').required('Please enter your email'),
      password: yup.string().required('please enter your pw').min(6, 'please enter at least 6 characters'),
      retypePassword: yup
        .string()
        .required('please enter retype pw')
        .oneOf([yup.ref('password')], 'Password does not match'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  // console.log('check form library', form);
  const handleSubmit2 = async (values) => {
    console.log('todo form', values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
    form.reset();
  };
  const { isSubmitting } = form.formState;
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className={classes.root}>
      {isSubmitting && <LinearProgress className={classes.progress} variant="determinate" value={progress} />}
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon></LockOutlinedIcon>
      </Avatar>
      <Typography className={classes.title} component={'h3'} variant="h5">
        {/* thẻ là h3 , nhwung xài style h5 */}
        Create a new account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit2)}>
        <InputField form={form} name="fullName" label="fullName" />
        <InputField form={form} name="email" label="email" />
        <PasswordField form={form} name="password" label="password" />
        <PasswordField form={form} name="retypePassword" label="retypePassword" />
        <Button disabled={isSubmitting} type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
