import { Box } from '@mui/material'

export default function Sidebar() {
	return (
		<Box
			flex={1}
			p={2}
			sx={{
				display: {
					xs: 'none',
					sm: 'block',
				},
			}}
			bgcolor='skyblue'>
			Sidebar
		</Box>
	)
}
