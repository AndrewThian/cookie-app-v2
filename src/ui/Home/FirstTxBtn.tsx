import { Button, ButtonType, FontWeight, WidthType } from '@components/Button'

export interface FirstTxBtnProps {
  onClick: () => void
}

export const FirstTxBtn: React.FC<FirstTxBtnProps> = ({ onClick }) => {
  return (
    <div className="w-full font-normal mb-24">
      <Button
        onClick={onClick}
        label="Log first transaction"
        widthType={WidthType.VARIABLE}
        btnType={ButtonType.LINK}
        fontWeight={FontWeight.MED}
      ></Button>
    </div>
  )
}
