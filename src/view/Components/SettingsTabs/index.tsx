import * as Tabs from '@radix-ui/react-tabs';
import { TabItem } from './TabItem';
import { useState } from 'react';

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab-1');
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab-1"
          isSelected={currentTab === 'tab-1'}
          title="My details"
        />
        <TabItem
          value="tab-2"
          isSelected={currentTab === 'tab-2'}
          title="Profile"
        />
        <TabItem
          value="tab-3"
          isSelected={currentTab === 'tab-3'}
          title="Password"
        />
        <TabItem
          value="tab-4"
          isSelected={currentTab === 'tab-4'}
          title="Team"
        />
        <TabItem
          value="tab-5"
          isSelected={currentTab === 'tab-5'}
          title="Plan"
        />
        <TabItem
          value="tab-6"
          isSelected={currentTab === 'tab-6'}
          title="Billing"
        />
        <TabItem
          value="tab-7"
          isSelected={currentTab === 'tab-7'}
          title="Email"
        />
      </Tabs.List>
    </Tabs.Root>
  );
}
