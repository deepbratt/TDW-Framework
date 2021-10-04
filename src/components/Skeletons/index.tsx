import Grid from '@material-ui/core/Grid';

interface ISkeletonsProps {
  children: React.ReactNode;
  length: number;
  layoutType?: string;
}

const Skeletons: React.FC<ISkeletonsProps> = ({
  length,
  children,
  layoutType
}) => {
  return (
    <Grid container spacing={1}>
      {[...Array(length)].map((item, index) => (
        <Grid item xs={12} sm={layoutType === 'list' ? 12 : 6} key={index}>
          {children}
        </Grid>
      ))}
    </Grid>
  );
};

export default Skeletons;
