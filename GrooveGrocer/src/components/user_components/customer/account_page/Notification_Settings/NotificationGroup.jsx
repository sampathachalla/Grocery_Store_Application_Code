import NotificationToggle from "./NotificationToggle";

const NotificationGroup = ({ title, options }) => {
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-black mb-2">{title}</h3>
      <div className="space-y-3">
        {options.map((opt, idx) => (
          <NotificationToggle
            key={idx}
            label={opt.label}
            description={opt.description}
            defaultEnabled={opt.enabled}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationGroup;
