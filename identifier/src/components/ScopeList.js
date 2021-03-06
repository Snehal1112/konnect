import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const scopesMap = {
  'openid': 'basic',
  'email': 'basic',
  'profile': 'basic'
};

const descriptionMap = {
  'basic': 'Access your basic account information',
  'offline_access': 'Keep the allowed access persistently and forever'
};

const styles = () => ({
  row: {
    paddingTop: 0,
    paddingBottom: 0
  }
});

const ScopeList = ({scopes, classes, ...rest}) => {
  const rows = [];
  const known = {};

  for (let scope in scopes) {
    if (!scopes[scope]) {
      continue;
    }
    let id = scopesMap[scope];
    if (id) {
      if (known[id]) {
        continue;
      }
      known[id] = true;
    } else {
      id = scope;
    }
    let label = descriptionMap[id];
    if (!label) {
      label = `Scope: ${scope}`;
    }

    rows.push(
      <ListItem
        disableGutters
        dense
        key={id}
        className={classes.row}
      ><Checkbox
          checked
          disableRipple
          disabled
        />
        <ListItemText primary={label} />
      </ListItem>
    );
  }

  return (
    <List {...rest}>
      {rows}
    </List>
  );
};

ScopeList.propTypes = {
  classes: PropTypes.object.isRequired,

  scopes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScopeList);
