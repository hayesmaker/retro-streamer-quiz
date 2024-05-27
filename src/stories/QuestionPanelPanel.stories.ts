import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import QuestionPanel from '../components/QuestionPanel';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'RSQ/QuestionPanel',
  component: QuestionPanel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    coverUrl: {
      control: 'text',
      description: 'Overwritten description',

    },
    // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    coverUrl: 'https://www.lemon64.com/assets/images/games/covers/large/2x/last_ninja_01.jpg',
  },
} satisfies Meta<typeof QuestionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultQuestionPanel: Story = {
  args: {
    coverUrl: 'https://www.lemon64.com/assets/images/games/covers/large/2x/creatures_(thalamus)_01.jpg',
  },
};