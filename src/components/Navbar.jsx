import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import styled from '@mui/material/styles/styled'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Pets from '@mui/icons-material/Pets'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Mail from '@mui/icons-material/Mail'
import Notifications from '@mui/icons-material/Notifications'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: '#fff',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}))

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}))

export default function Navbar() {
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					Anoop Raju
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase sx={{ width: '100%' }} placeholder='search...' />
				</Search>
				<Icons>
					<Badge badgeContent={2} color='error'>
						<Mail />
					</Badge>

					<Badge badgeContent={2} color='error'>
						<Notifications />
					</Badge>

					<Avatar
						onClick={() => setOpen(true)}
						sx={{ width: 30, height: 30 }}
					/>
				</Icons>

				<UserBox>
					<Avatar
						onClick={() => setOpen(true)}
						sx={{ width: 30, height: 30 }}
					/>
					{/* <Typography variant='span'> John </Typography> */}
				</UserBox>
			</StyledToolbar>

			<Menu
				id='demo-positioned-menu'
				aria-labelledby='demo-positioned-button'
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	)
}
