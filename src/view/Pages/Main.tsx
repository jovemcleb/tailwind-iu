import { SettingsTabs } from '../Components/SettingsTabs';
import * as Input from '../Components/Input';
import { Bold, Italic, Link2, List, ListOrdered, Mail } from 'lucide-react';
import * as FileInput from '../Components/Form/FileInput';
import { Select } from '../Components/Form/Select';
import { SelectItem } from '../Components/Form/Select/SelectItem';
import { TextArea } from '../Components/Form/TextArea';
import { Button } from '../Components/Button';

export function Main() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-300">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" variant="primary" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caleb" />
              </Input.Root>
              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last Name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Lima" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email Address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="caleb@email.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem text="United States" value="us" />
              <SelectItem text="Canada" value="ca" />
              <SelectItem text="Brasil" value="br" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="timezone"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a Timezone">
              <SelectItem text="GMT-4" value="gmt-4" />
              <SelectItem text="GMT-5" value="gmt-5" />
              <SelectItem text="GMT-6" value="gmt-6" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-5 w-5 text-zinc-500" strokeWidth={2.5} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link2
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-5 w-5 text-zinc-500" strokeWidth={2.5} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </Button>
                </div>
              </div>
              <TextArea id="bio" />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="portfolioProjects"
              className=" text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>
            <FileInput.Root>
              <div className="flex w-full flex-col justify-center">
                <FileInput.Trigger />
                <FileInput.FileList />
                <FileInput.Control multiple />
              </div>
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit" variant="primary" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
