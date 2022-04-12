import Layout from './Layout';
import classes from './Design.module.css';

function Design(props) {
  return (
    <div>
      <Layout />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Design;
