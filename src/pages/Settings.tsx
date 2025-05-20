
import React, { useState } from "react";
import { ArrowLeft, Mail, Clock, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Settings = () => {
  const [enableDigest, setEnableDigest] = useState(true);
  const [digestTime, setDigestTime] = useState("08:00");

  const handleDisconnect = () => {
    toast.success("Gmail disconnected successfully");
  };

  return (
    <div className="container mx-auto max-w-3xl py-8 px-4">
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-3">
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>

      <div className="bg-card rounded-lg border border-border shadow-sm">
        <div className="p-6">
          <h2 className="text-lg font-medium mb-6">Email Preferences</h2>

          <div className="space-y-6">
            {/* Daily Digest Toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">Daily Digest</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Receive a daily summary of your emails
                </p>
              </div>
              <Switch 
                checked={enableDigest} 
                onCheckedChange={setEnableDigest} 
                aria-label="Toggle daily digest"
              />
            </div>

            {/* Digest Time Dropdown */}
            {enableDigest && (
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Digest Time</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Choose when to receive your daily digest
                  </p>
                </div>
                <Select value={digestTime} onValueChange={setDigestTime}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="06:00">6:00 AM</SelectItem>
                    <SelectItem value="08:00">8:00 AM</SelectItem>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                    <SelectItem value="20:00">8:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div className="border-t border-border pt-6">
              <h3 className="text-base font-medium mb-4">Account</h3>
              
              {/* Disconnect Gmail Button */}
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="font-medium">Gmail Connection</span>
                  <p className="text-sm text-muted-foreground">
                    Manage your Gmail account connection
                  </p>
                </div>
                <Button 
                  variant="outline" 
                  className="border-destructive text-destructive hover:bg-destructive/10"
                  onClick={handleDisconnect}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Disconnect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
