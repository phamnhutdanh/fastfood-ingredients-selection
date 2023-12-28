import {OnPressItem} from '../../../types/GenericType';
import {convertMillisecondsToDate} from '../../../utils/dateConvert';
import ItemReport from './ItemReport';

type ThisProps = {
  data: any;
  onPressItem: OnPressItem;
};

export default function ItemReportWithData(props: ThisProps): JSX.Element {
  const updateAt = convertMillisecondsToDate(props.data.updatedAt);
  return (
    <ItemReport
      title={props.data.title}
      message={props.data.message}
      updatedAt={updateAt}
      onPressItem={props.onPressItem}
    />
  );
}
