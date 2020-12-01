import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ProductSearchResults from "./ProductSearchResults"
import "./ProductSearch.css"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function ProductSearch() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openVendor, setOpenVendor] = React.useState(false);
  const anchorRef = React.useRef(null);
  const anchorVendorRef = React.useRef(null);
  const [search, setSearch] = useState()
  

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleVendorToggle = () => {
    setOpenVendor((prevOpen) => !prevOpen);
  };

  const handleClose = (selection) => {
      setSearch(selection)
    setOpen(false);
  };
  

  const handleVendorClose = (selection) => {
    
    setSearch(selection)
  
  setOpenVendor(false);
};

console.log(search)

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
     <div className="searchContainer">
          <h2>Shop the Market</h2>
    <div className={classes.root}>
      <div className="searchOptions">
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Search By Category
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={() => handleClose("all")}>All Products</MenuItem>
                    <MenuItem onClick={() => handleClose("produce")}>Produce</MenuItem>
                    <MenuItem onClick={() => handleClose("bread")}>Bread</MenuItem>
                    <MenuItem onClick={() => handleClose("cheese")}>Cheese</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
            {/* add vendor search */}
            <div>
        <Button
          ref={anchorVendorRef}
          aria-controls={openVendor ? 'vendor-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleVendorToggle}
        >
          Search By Vendor
        </Button>
        <Popper open={openVendor} anchorEl={anchorVendorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleVendorClose}>
                  <MenuList autoFocusItem={openVendor} id="vendor-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={() => handleVendorClose("vendor1")}>Vendor 1</MenuItem>
                    <MenuItem onClick={() => handleVendorClose("vendor2")}>Vendor2</MenuItem>
                    <MenuItem onClick={() => handleVendorClose("vendor3")}>Vendor 3</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
      </div>
    </div> 
      <div className="searchResults">
      <ProductSearchResults search ={search} />
      </div>
    
    </div> 
  );
}

export default ProductSearch