import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Switch from '@mui/material/Switch'
import AccountBox from '@mui/icons-material/AccountBox'
import Article from '@mui/icons-material/Article'
import Group from '@mui/icons-material/Group'
import Home from '@mui/icons-material/Home'
import ModeNight from '@mui/icons-material/ModeNight'
import Person from '@mui/icons-material/Person'
import Settings from '@mui/icons-material/Settings'
import Storefront from '@mui/icons-material/Storefront'

export default function Sidebar() {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton component='a' href='/'>
							<ListItemIcon>
								<Home />
							</ListItemIcon>
							<ListItemText primary='Home' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<Article />
							</ListItemIcon>
							<ListItemText primary='Pages' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<Group />
							</ListItemIcon>
							<ListItemText primary='Groups' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<Storefront />
							</ListItemIcon>
							<ListItemText primary='Marketplace' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<Person />
							</ListItemIcon>
							<ListItemText primary='Friends' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary='Settings' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<AccountBox />
							</ListItemIcon>
							<ListItemText primary='Profile' />
						</ListItemButton>
					</ListItem>
					<ListItem disablePadding>
						<ListItemButton component='a' href='#simple-list'>
							<ListItemIcon>
								<ModeNight />
							</ListItemIcon>
							<Switch />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}
