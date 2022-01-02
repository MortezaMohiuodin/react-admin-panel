import { useState, useEffect } from "react"
import { Grid, Box, Paper } from "@mui/material"
import { useAuth } from "src/contexts/AuthProvider/Index"
import { getFullUser } from "src/api/Index"
import MainProfileBox from "src/components/MainProfileBox/Index"
import BasicTabs from "src/components/BasicTabs/Index"
import { TabPanel } from "src/components/BasicTabs/Index"
import { alpha } from "@mui/material"
export default function Profile() {
  const [tab, setTab] = useState(0)
  const { user } = useAuth()
  const updateTab = (event, newValue) => {
    setTab(newValue)
  }
  const [fullUser, setFullUser] = useState(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
    getFullUser(user.id)
      .then(({ data }) => {
        setFullUser(data)
      })
      .finally(() => {
        setLoading(false)
      })
    return () => {}
  }, [])
  return (
    <Box sx={{ maxWidth: 800, margin: "auto" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <MainProfileBox user={fullUser} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              p: 2,
              backgroundColor: "cardBg.main",
            }}>
            <BasicTabs
              value={tab}
              updateTab={updateTab}
              tabs={["مشخصات کلی", "سایر"]}>
              <TabPanel value={tab} index={0}>
                Item One
              </TabPanel>
              <TabPanel value={tab} index={1}>
                Item Two
              </TabPanel>
            </BasicTabs>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
