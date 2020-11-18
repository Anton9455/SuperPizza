import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Cards from '../component/Cards';
import Cart from '../component/Cart';

import serviceComponent from '../../assets/scripts/services/serviceCategories';
import service from '../../assets/scripts/services/serviceComponent';
import { TabPanelProps, IOrderState } from '../../assets/scripts/types';

const icons = new Map();
const reqSvgs = require.context('../../assets/icons', true, /\.svg$/);
reqSvgs.keys().forEach((path) => {
  icons.set(path, reqSvgs(path))
}
);





function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'div'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: 'auto'
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [pizza, setPizza] = React.useState(new Map<number, IOrderState>());

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const categories = serviceComponent.getCategories();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          {categories.map((category) => {
            return <Tab key={category.id} label={category.name} icon={<img className="tabs-logo" src={icons.get(category.icon.src).default} alt={category.icon.alt} />} {...a11yProps(category.id)} />
          })}
        </Tabs>
      </AppBar>
      {categories.map((category) => {
        let card = service.getCardsById(category.id).cards;
        return (
          <TabPanel key={category.id} value={value} index={category.id}>
            <Cards cards={card} pizza={pizza} addPizza={setPizza}/>
          </TabPanel>
        )
      })}
      <TabPanel value={value} index={6}>
        <Cart pizza={pizza} editOrder={setPizza}/>
      </TabPanel>
    </div>
  );
}