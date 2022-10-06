import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BarTool from "../components/new_issue/BarTool";

export default {
	title: "BarTool",
	component: BarTool,
	argTypes: {
		button: {
			options: ["_button name", false],
			control: { type: "radio" },
		},
	},
} as ComponentMeta<typeof BarTool>;

const Template: ComponentStory<typeof BarTool> = (args) => (
	<div className="w-[240px]">
		<BarTool {...args} />
	</div>
);
export const Default = Template.bind({});

Default.args = {
	name: "labels",
	setting: true,
	defaultText: "None-yet",
};

export const LinkType = Template.bind({});

LinkType.args = {
	name: "labels",
	setting: true,
	link: "link name",
};
