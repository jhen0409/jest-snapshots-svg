import "../../index"

import * as React from "react"
import { View } from "react-native"
import * as renderer from "react-test-renderer"

// http://facebook.github.io/react-native/releases/0.49/docs/layout-props.html#flexwrap

it("Renders blocks in multiple rows", () => {
  const jsx =
    <View style={{flex: 1, flexDirection: "row", flexWrap: "wrap"}}>
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "powderblue"}} />
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "skyblue"}} />
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "steelblue"}} />
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "powderblue"}} />
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "skyblue"}} />
      <View style={{width: 60, height: 60, margin: 10, backgroundColor: "steelblue"}} />
    </View>

  const component = renderer.create(jsx).toJSON()
  expect(component).toMatchSVGSnapshot(320, 480)
})
