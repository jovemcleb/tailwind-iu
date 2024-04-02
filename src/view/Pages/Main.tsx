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
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5 ">
          <div>
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
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
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className=" text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Caleb" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Lima" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className=" text-sm font-medium text-zinc-700"
            >
              Email Address
            </label>
            <div className="grid grid-cols-2 gap-6">
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
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className=" text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>
            <FileInput.Root>
              <FileInput.ImagePreview />
              <FileInput.Trigger />
              <FileInput.Control />
            </FileInput.Root>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className=" text-sm font-medium text-zinc-700"
            >
              Role
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="role" defaultValue="Developer" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className=" text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem text="United States" value="us" />
              <SelectItem text="Canada" value="ca" />
              <SelectItem text="Brasil" value="br" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className=" text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select placeholder="Select a Timezone">
              <SelectItem text="GMT-4" value="gmt-4" />
              <SelectItem text="GMT-5" value="gmt-5" />
              <SelectItem text="GMT-6" value="gmt-6" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className=" text-sm font-medium text-zinc-700">
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Bold className="h-5 w-5 text-zinc-500" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Italic
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <Link2
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <List className="h-5 w-5 text-zinc-500" strokeWidth={2.5} />
                  </button>
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-50"
                  >
                    <ListOrdered
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
              <TextArea id="bio" />
            </div>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="portfolioProjects"
              className=" text-sm font-medium text-zinc-700"
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
