import React from 'react';

// COMMENT THIS IMPORT OUT TO MAKE LET THE PIVOT RENDER PROPERLY.
// Uncomment to repro the bug.
//
// We don't reference anything from this lib, but importing anything
// from it will cause the break.
import * as test from "react-timeseries-charts";

export function ThisComponentIsUsed() {
  return <div></div>;
}
