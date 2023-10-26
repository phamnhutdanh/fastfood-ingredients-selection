import GenericBasicInfoEditItem from '../../generics/GenericBasicInfoEditItem';

type ThisProps = {
  value: string;
  onChangedText: (text: string) => void;
};

export default function EditPhoneDisplay(props: ThisProps): JSX.Element {
  return (
    <GenericBasicInfoEditItem
      label={'Phone'}
      placeHolder={'Enter your phone'}
      value={props.value}
      onChangedText={props.onChangedText}
      iconName={'phone'}
      iconType={'font-awesome'}
    />
  );
}
