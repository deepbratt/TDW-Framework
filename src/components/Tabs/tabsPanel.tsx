export interface TabsPanelsProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

const TabsPanels: React.FC<TabsPanelsProps> = ({ value, index, children }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`tab-${index}`}
      style={{ width: "100%" }}
    >
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

export default TabsPanels;
