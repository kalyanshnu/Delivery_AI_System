import React, { useState } from "react";
import "./TeamManagement.css";

const TeamManagement = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@company.com",
      role: "Team Lead",
      status: "Active",
      lastLogin: "2024-12-15 09:30 AM",
      avatar: "/src/Components/Home/testimonial/Sarah.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@company.com",
      role: "Driver Manager",
      status: "Active",
      lastLogin: "2024-12-15 08:45 AM",
      avatar: "/src/Components/Home/testimonial/MichaelChen.png",
    },
    {
      id: 3,
      name: "Priya Patel",
      email: "priya.patel@company.com",
      role: "Route Coordinator",
      status: "Active",
      lastLogin: "2024-12-14 04:20 PM",
      avatar: "/src/Components/Home/testimonial/PriyaPatel.png",
    },
    {
      id: 4,
      name: "James Wilson",
      email: "james.wilson@company.com",
      role: "Analyst",
      status: "Inactive",
      lastLogin: "2024-12-10 02:15 PM",
      avatar: "/src/assets/logo.png",
    },
  ]);

  const [showAddMember, setShowAddMember] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [selectedMembers, setSelectedMembers] = useState([]);

  const roles = [
    "Team Lead",
    "Driver Manager",
    "Route Coordinator",
    "Analyst",
    "Administrator",
    "Supervisor",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({
      ...newMember,
      [name]: value,
    });
  };

  const handleAddMember = () => {
    if (newMember.name && newMember.email && newMember.role) {
      const member = {
        id: teamMembers.length + 1,
        ...newMember,
        status: "Active",
        lastLogin: "Never",
        avatar: "/src/assets/logo.png",
      };
      setTeamMembers([...teamMembers, member]);
      setNewMember({ name: "", email: "", role: "" });
      setShowAddMember(false);
    }
  };

  const handleSelectMember = (memberId) => {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleSelectAll = () => {
    if (selectedMembers.length === teamMembers.length) {
      setSelectedMembers([]);
    } else {
      setSelectedMembers(teamMembers.map((member) => member.id));
    }
  };

  const handleDeleteSelected = () => {
    setTeamMembers((prev) =>
      prev.filter((member) => !selectedMembers.includes(member.id))
    );
    setSelectedMembers([]);
  };

  const toggleMemberStatus = (memberId) => {
    setTeamMembers((prev) =>
      prev.map((member) =>
        member.id === memberId
          ? {
              ...member,
              status: member.status === "Active" ? "Inactive" : "Active",
            }
          : member
      )
    );
  };

  return (
    <div className="team-management">
      <div className="section-header">
        <h2>Team Management</h2>
        <p>Manage your team members, roles, and permissions</p>
      </div>

      <div className="team-stats">
        <div className="stat-card">
          <div className="stat-number">{teamMembers.length}</div>
          <div className="stat-label">Total Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {teamMembers.filter((m) => m.status === "Active").length}
          </div>
          <div className="stat-label">Active Members</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{roles.length}</div>
          <div className="stat-label">Available Roles</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">
            {teamMembers.filter((m) => m.lastLogin !== "Never").length}
          </div>
          <div className="stat-label">Recently Active</div>
        </div>
      </div>

      <div className="team-actions">
        <div className="team-actions-left">
          <button
            className="add-member-btn"
            onClick={() => setShowAddMember(true)}
          >
            + Add Team Member
          </button>
          {selectedMembers.length > 0 && (
            <button
              className="delete-selected-btn"
              onClick={handleDeleteSelected}
            >
              Delete Selected ({selectedMembers.length})
            </button>
          )}
        </div>
        <div className="team-search">
          <input
            type="text"
            placeholder="Search team members..."
            className="search-input"
          />
        </div>
      </div>

      {showAddMember && (
        <div className="add-member-form">
          <h3>Add New Team Member</h3>
          <div className="form-grid">
            <div className="input-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={newMember.name}
                onChange={handleInputChange}
                placeholder="Enter full name"
              />
            </div>
            <div className="input-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={newMember.email}
                onChange={handleInputChange}
                placeholder="Enter email address"
              />
            </div>
            <div className="input-group">
              <label>Role</label>
              <select
                name="role"
                value={newMember.role}
                onChange={handleInputChange}
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-actions">
            <button className="save-member-btn" onClick={handleAddMember}>
              Add Member
            </button>
            <button
              className="cancel-member-btn"
              onClick={() => setShowAddMember(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="team-table-container">
        <table className="team-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedMembers.length === teamMembers.length}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Member</th>
              <th>Role</th>
              <th>Status</th>
              <th>Last Login</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teamMembers.map((member) => (
              <tr
                key={member.id}
                className={
                  selectedMembers.includes(member.id) ? "selected" : ""
                }
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedMembers.includes(member.id)}
                    onChange={() => handleSelectMember(member.id)}
                  />
                </td>
                <td>
                  <div className="member-info">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="member-avatar"
                      onError={(e) => {
                        e.target.src = "/src/assets/logo.png";
                      }}
                    />
                    <div className="member-details">
                      <div className="member-name">{member.name}</div>
                      <div className="member-email">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="role-badge">{member.role}</span>
                </td>
                <td>
                  <span
                    className={`status-badge ${member.status.toLowerCase()}`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="last-login">{member.lastLogin}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn edit-btn" title="Edit member">
                      ✏️
                    </button>
                    <button
                      className={`action-btn toggle-btn ${member.status.toLowerCase()}`}
                      onClick={() => toggleMemberStatus(member.id)}
                      title={
                        member.status === "Active" ? "Deactivate" : "Activate"
                      }
                    >
                      {member.status === "Active" ? "⏸️" : "▶️"}
                    </button>
                    <button
                      className="action-btn delete-btn"
                      title="Delete member"
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="team-permissions">
        <h3>Role Permissions</h3>
        <div className="permissions-grid">
          <div className="permission-category">
            <h4>Dashboard Access</h4>
            <div className="permission-items">
              <div className="permission-item">
                <span>View Analytics</span>
                <div className="role-checks">
                  <span className="role-check active">Team Lead</span>
                  <span className="role-check active">Driver Manager</span>
                  <span className="role-check">Route Coordinator</span>
                  <span className="role-check active">Analyst</span>
                </div>
              </div>
              <div className="permission-item">
                <span>Manage Orders</span>
                <div className="role-checks">
                  <span className="role-check active">Team Lead</span>
                  <span className="role-check active">Driver Manager</span>
                  <span className="role-check active">Route Coordinator</span>
                  <span className="role-check">Analyst</span>
                </div>
              </div>
            </div>
          </div>

          <div className="permission-category">
            <h4>Team Management</h4>
            <div className="permission-items">
              <div className="permission-item">
                <span>Add/Remove Members</span>
                <div className="role-checks">
                  <span className="role-check active">Team Lead</span>
                  <span className="role-check">Driver Manager</span>
                  <span className="role-check">Route Coordinator</span>
                  <span className="role-check">Analyst</span>
                </div>
              </div>
              <div className="permission-item">
                <span>Assign Roles</span>
                <div className="role-checks">
                  <span className="role-check active">Team Lead</span>
                  <span className="role-check">Driver Manager</span>
                  <span className="role-check">Route Coordinator</span>
                  <span className="role-check">Analyst</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagement;
