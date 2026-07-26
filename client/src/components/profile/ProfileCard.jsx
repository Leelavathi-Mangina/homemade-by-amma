export default function ProfileCard({ user }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-md">
      <h2 className="mb-8 text-2xl font-bold text-gray-900">
        Profile Information
      </h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-500">
            Name
          </p>

          <p className="mt-1 text-lg font-semibold text-gray-900">
            {user.name}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">
            Email
          </p>

          <p className="mt-1 text-lg text-gray-900">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">
            Phone
          </p>

          <p className="mt-1 text-lg text-gray-900">
            {user.phone}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500">
            Role
          </p>

          <span className="mt-2 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
          </span>
        </div>
      </div>
    </div>
  );
}