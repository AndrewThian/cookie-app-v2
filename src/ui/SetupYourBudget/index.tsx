import { AppShell, BgColor, ShellType } from '@components/AppShell'
import Heading from './Heading'

const SetupYourBudget: React.FC = () => {
  return (
    <AppShell bgColor={BgColor.WHITE} type={ShellType.page}>
      <Heading />
    </AppShell>
  )
}

export default SetupYourBudget
