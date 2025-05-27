'use client';
import React from "react";
import Link from "next/link";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Badge
} from "@material-tailwind/react";
import {
  HomeModernIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  RectangleStackIcon,
  UserCircleIcon,
  UserIcon,
  Cog6ToothIcon,
  PowerIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  ChartPieIcon,
  DocumentChartBarIcon,
  WrenchScrewdriverIcon,
  ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function MultiLevelSidebar() {
  const [open, setOpen] = React.useState(0);
  const [activeItem, setActiveItem] = React.useState(null);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <Card className="fixed h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-gradient-to-b from-blue-gray-50 to-blue-gray-100 rounded-none">
      <div className="mb-4 p-4 border-b border-blue-gray-100">
        <Typography variant="h5" color="blue-gray" className="font-bold">
          Care Management
        </Typography>
        <Typography variant="small" color="blue-gray" className="font-normal opacity-75">
          Navigation Menu
        </Typography>
      </div>
      
      <div className="overflow-y-auto h-[calc(100vh-9rem)]">
        <List className="p-0">
          {/* Dashboard Section */}
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0 rounded-lg" selected={open === 1}>
              <AccordionHeader 
                onClick={() => handleOpen(1)} 
                className="border-b-0 p-3 hover:bg-blue-gray-50 rounded-lg"
              >
                <ListItemPrefix>
                  <HomeModernIcon className="h-5 w-5 text-blue-500" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-medium">
                  Dashboard
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 pl-8">
              <List className="p-0">
                <Link href="/dashboard/patients">
                  <ListItem 
                    className="rounded-lg hover:bg-blue-gray-50"
                    onClick={() => handleItemClick('patients')}
                    selected={activeItem === 'patients'}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                    </ListItemPrefix>
                    Patients
                    <Badge color="blue" className="ml-auto" content="5">5</Badge>
                  </ListItem>
                </Link>
                <Link href="/dashboard/employees">
                  <ListItem 
                    className="rounded-lg hover:bg-blue-gray-50"
                    onClick={() => handleItemClick('employees')}
                    selected={activeItem === 'employees'}
                  >
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                    </ListItemPrefix>
                    Employees
                  </ListItem>
                </Link>
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  EVV
                  <Badge color="red" className="ml-auto">New</Badge>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Billing Center Section */}
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0 rounded-lg" selected={open === 2}>
              <AccordionHeader 
                onClick={() => handleOpen(2)} 
                className="border-b-0 p-3 hover:bg-blue-gray-50 rounded-lg"
              >
                <ListItemPrefix>
                  <CurrencyDollarIcon className="h-5 w-5 text-green-500" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-medium">
                  Billing Center
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 pl-8">
              <List className="p-0">
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  <Link href="/billing/professional-claims">
                    Professional Claims
                  </Link>
                </ListItem>
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  <Link href="/billing/institutional-claims">
                    Institutional Claims
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* Analytics Section */}
          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className="p-0 rounded-lg" selected={open === 3}>
              <AccordionHeader 
                onClick={() => handleOpen(3)} 
                className="border-b-0 p-3 hover:bg-blue-gray-50 rounded-lg"
              >
                <ListItemPrefix>
                  <ChartBarIcon className="h-5 w-5 text-purple-500" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-medium">
                  Analytics
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1 pl-8">
              <List className="p-0">
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  <Link href="/analytics/kpi">
                    Key Performance Indicators
                  </Link>
                </ListItem>
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  <Link href="/analytics/paginated-reports">
                    Paginated Reports
                  </Link>
                </ListItem>
                <ListItem className="rounded-lg hover:bg-blue-gray-50">
                  <ListItemPrefix>
                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-blue-gray-400" />
                  </ListItemPrefix>
                  <Link href="/analytics/standard-reports">
                    Standard Reports
                  </Link>
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          {/* People Management Section */}
          <Typography variant="small" color="blue-gray" className="font-medium p-4 pt-6 pb-2">
            People Management
          </Typography>
          
          <Link href="/dashboard/employees">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('employees')}
              selected={activeItem === 'employees'}
            >
              <ListItemPrefix>
                <UserIcon className="h-5 w-5 text-blue-600" />
              </ListItemPrefix>
              Employees & Providers
            </ListItem>
          </Link>
          
          <Link href="/dashboard/responsible-parties">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('responsible-parties')}
              selected={activeItem === 'responsible-parties'}
            >
              <ListItemPrefix>
                <UserGroupIcon className="h-5 w-5 text-green-600" />
              </ListItemPrefix>
              Responsible Parties
            </ListItem>
          </Link>
          
          <Link href="/dashboard/supervising-providers">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('supervising-providers')}
              selected={activeItem === 'supervising-providers'}
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5 text-amber-600" />
              </ListItemPrefix>
              Supervising Providers
            </ListItem>
          </Link>
          
          <Link href="/dashboard/insurance-payers">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('insurance-payers')}
              selected={activeItem === 'insurance-payers'}
            >
              <ListItemPrefix>
                <DocumentTextIcon className="h-5 w-5 text-red-600" />
              </ListItemPrefix>
              Insurance Payers
            </ListItem>
          </Link>
          
          <Link href="/dashboard/referring-providers">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('referring-providers')}
              selected={activeItem === 'referring-providers'}
            >
              <ListItemPrefix>
                <ClipboardDocumentListIcon className="h-5 w-5 text-indigo-600" />
              </ListItemPrefix>
              Referring Providers
            </ListItem>
          </Link>
          
          <Link href="/dashboard/services">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('services')}
              selected={activeItem === 'services'}
            >
              <ListItemPrefix>
                <WrenchScrewdriverIcon className="h-5 w-5 text-teal-600" />
              </ListItemPrefix>
              Services
            </ListItem>
          </Link>
        </List>
      </div>

      {/* System Section - Placed at the bottom */}
      <div className="mt-auto border-t border-blue-gray-100 pt-2">
        <List className="p-0">
          <Typography variant="small" color="blue-gray" className="font-medium p-4 pt-2 pb-2">
            System
          </Typography>
          
          <Link href="/settings">
            <ListItem 
              className="rounded-lg hover:bg-blue-gray-50"
              onClick={() => handleItemClick('settings')}
              selected={activeItem === 'settings'}
            >
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5 text-gray-600" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </Link>
          
          <ListItem 
            className="rounded-lg hover:bg-blue-gray-50 text-red-600 hover:text-red-700"
            onClick={() => handleItemClick('logout')}
          >
            <ListItemPrefix>
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
