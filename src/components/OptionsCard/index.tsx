import { Paper, Typography } from "@material-ui/core";
import OptionsCardStyles from "./styles";

export interface OptionsCardProps {
  data: {
    icon: string;
    text: string;
  };
  key?: string;
  backgroundColor: string;
  backgroundColorSelected: string;
  handleClick: Function;
}

/** 
 @param data 
 @param backgroundColor
 @param backgroundColorSelected card background Color after Selection
 **/

const OptionsCard: React.FC<OptionsCardProps> = ({
  data,
  backgroundColor,
  backgroundColorSelected,
  handleClick,
}) => {
  const optionsCardStylesProps = {
    backgroundColor,
    backgroundColorSelected,
  };
  const { root } = OptionsCardStyles(optionsCardStylesProps);
  return (
    <Paper className={root} onClick={() => handleClick()}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.8281 0.171621C29.7182 0.0617578 29.5691 0 29.4137 0L15 0.000761719C14.6764 0.000761719 14.4141 0.263145 14.4141 0.586699V2.2623L8.86004 3.75053C8.54744 3.83432 8.36193 4.15559 8.44572 4.46812L11.3243 15.2108L8.83408 17.701C8.51715 17.2382 7.985 16.9339 7.38307 16.9339H1.75824C0.788984 16.9339 0.000488281 17.7224 0.000488281 18.6916V28.2422C0.000488281 29.2114 0.788984 30 1.75824 30H7.38313C8.20654 30 8.89924 29.4307 9.08908 28.6652L9.78576 29.2728C10.3236 29.7418 11.0127 30.0001 11.7263 30.0001H29.4138C29.7373 30.0001 29.9997 29.7377 29.9997 29.4141V0.585938C29.9996 0.430547 29.938 0.281484 29.8281 0.171621ZM7.96895 28.2422C7.96895 28.5653 7.70609 28.8282 7.38301 28.8282H1.75818C1.4351 28.8282 1.17225 28.5653 1.17225 28.2422V18.6917C1.17225 18.3686 1.4351 18.1058 1.75818 18.1058H3.98469V24.8555C3.98469 25.179 4.24707 25.4414 4.57062 25.4414C4.89418 25.4414 5.15656 25.179 5.15656 24.8555V18.1058H7.38307C7.70615 18.1058 7.969 18.3686 7.969 18.6917V28.2422H7.96895ZM9.72928 4.7308L14.4141 3.47549V5.64668L14.0214 5.75191C13.8712 5.79217 13.7433 5.89031 13.6656 6.0249C13.5879 6.15949 13.5668 6.31939 13.6071 6.46951C13.8322 7.3098 13.3318 8.17658 12.4915 8.40176C12.3412 8.44207 12.2131 8.54039 12.1354 8.67527C12.0578 8.8101 12.0369 8.97029 12.0775 9.12053L14.3614 17.5778H13.1854L12.5794 15.2069C12.5601 15.1314 12.5264 15.0619 12.4812 15.0014L9.72928 4.7308ZM14.4141 8.33373V13.2779L13.3454 9.3208C13.7918 9.09029 14.1571 8.74541 14.4141 8.33373ZM22.8319 28.8281H11.7262C11.2958 28.8281 10.8802 28.6724 10.5558 28.3896L9.14082 27.1555V19.0516L11.6989 16.4935L12.1629 18.3087C12.2292 18.5681 12.4628 18.7495 12.7305 18.7495L24.2503 18.7502C24.7026 18.7502 25.0706 19.1182 25.0706 19.5705C25.0706 20.0229 24.7026 20.3909 24.2503 20.3909H18.3475C18.024 20.3909 17.7616 20.6532 17.7616 20.9768C17.7616 21.3004 18.024 21.5627 18.3475 21.5627H26.0843C26.5366 21.5627 26.9046 21.9307 26.9046 22.383C26.9046 22.8354 26.5366 23.2034 26.0843 23.2034H18.3475C18.024 23.2034 17.7616 23.4657 17.7616 23.7893C17.7616 24.1129 18.024 24.3752 18.3475 24.3752H24.8305C25.2829 24.3752 25.6508 24.7432 25.6508 25.1955C25.6508 25.6479 25.2829 26.0159 24.8305 26.0159H18.3475C18.024 26.0159 17.7616 26.2782 17.7616 26.6018C17.7616 26.9254 18.024 27.1877 18.3475 27.1877H22.8319C23.2842 27.1877 23.6522 27.5557 23.6522 28.008C23.6522 28.4602 23.2842 28.8281 22.8319 28.8281ZM28.8279 28.8281H28.8278H24.6466C24.7602 28.5778 24.824 28.3002 24.824 28.0078C24.824 27.7154 24.7602 27.4379 24.6466 27.1875H24.8305C25.929 27.1875 26.8227 26.2938 26.8227 25.1954C26.8227 24.875 26.7462 24.5722 26.6112 24.3037C27.4547 24.0721 28.0763 23.2989 28.0763 22.3829C28.0763 21.9386 27.93 21.5278 27.6831 21.1961V13.7699C27.6831 13.4464 27.4207 13.184 27.0972 13.184C26.7736 13.184 26.5112 13.4464 26.5112 13.7699V20.4374C26.3735 20.4073 26.2307 20.3909 26.0841 20.3909H26.0649C26.1785 20.1405 26.2423 19.8629 26.2423 19.5705C26.2423 18.472 25.3487 17.5784 24.2502 17.5784H23.3083C24.3085 17.1495 25.0109 16.1554 25.0109 15C25.0109 13.4538 23.753 12.1958 22.2068 12.1958C20.6606 12.1958 19.4026 13.4538 19.4026 15C19.4026 16.1554 20.1051 17.1495 21.1052 17.5784H17.9023V6.43728C18.949 6.20918 19.7749 5.3833 20.003 4.33652H24.4105C24.6385 5.3833 25.4645 6.20918 26.5112 6.43728V8.25896C26.5112 8.58252 26.7736 8.8449 27.0971 8.8449C27.4207 8.8449 27.683 8.58252 27.683 8.25896V5.91416C27.683 5.59061 27.4207 5.32822 27.0971 5.32822C26.2272 5.32822 25.5195 4.62047 25.5195 3.75059C25.5195 3.42703 25.2572 3.16465 24.9336 3.16465H19.4799C19.1564 3.16465 18.894 3.42703 18.894 3.75059C18.894 4.62053 18.1863 5.32822 17.3164 5.32822C16.9929 5.32822 16.7305 5.59061 16.7305 5.91416V17.5784H15.586V1.17252L28.8279 1.17188V28.8281ZM22.2069 16.6323C21.3068 16.6323 20.5746 15.9001 20.5746 15.0001C20.5746 14.1001 21.3069 13.3678 22.2069 13.3678C23.1069 13.3678 23.8391 14.1 23.8391 15C23.8391 15.9 23.1069 16.6323 22.2069 16.6323Z"
          fill="#828282"
        />
      </svg>
      <Typography align="center" variant="body2" component="h6">
        {data.text}
      </Typography>
    </Paper>
  );
};

export default OptionsCard;
