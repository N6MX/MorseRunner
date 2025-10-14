// Data loader service for contest data files
export interface ContestCall {
  call: string;
  exchange1: string;
  exchange2: string;
  userText: string;
}

class DataLoader {
  private dataCache: Map<string, ContestCall[]> = new Map();

  // Load contest data from file
  async loadContestData(filename: string): Promise<ContestCall[]> {
    // Check cache first
    if (this.dataCache.has(filename)) {
      return this.dataCache.get(filename)!;
    }

    try {
      // Try to load real data first
      const realData = await this.loadRealData(filename);
      if (realData.length > 0) {
        this.dataCache.set(filename, realData);
        return realData;
      }
      
      // Fallback to sample data if real data loading fails
      const sampleData = this.generateSampleData(filename);
      this.dataCache.set(filename, sampleData);
      return sampleData;
    } catch (error) {
      console.error(`Error loading contest data from ${filename}:`, error);
      // Return sample data as fallback
      const sampleData = this.generateSampleData(filename);
      this.dataCache.set(filename, sampleData);
      return sampleData;
    }
  }

  // Load real data from bundled assets
  private async loadRealData(filename: string): Promise<ContestCall[]> {
    try {
      // For now, we'll use sample data since loading .txt files in Expo is complex
      // In a production app, you'd convert these to JSON files or use a different approach
      console.log(`Using sample data for ${filename} (real data loading not implemented yet)`);
      return [];
    } catch (error) {
      console.warn(`Could not load real data from ${filename}, using sample data:`, error);
      return [];
    }
  }

  // Parse call history from text data
  private parseCallHistory(data: string, filename: string): ContestCall[] {
    const lines = data.split('\n').filter(line => line.trim());
    const calls: ContestCall[] = [];

    for (const line of lines) {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        // Parse different formats based on filename
        const call = this.parseCallFromLine(trimmedLine, filename);
        if (call) {
          calls.push(call);
        }
      }
    }

    return calls;
  }

  // Parse individual call from line
  private parseCallFromLine(line: string, filename: string): ContestCall | null {
    try {
      // Basic parsing - this would be more sophisticated in a real implementation
      const parts = line.split(/\s+/);
      if (parts.length < 1) return null;

      const call = parts[0].trim();
      if (!call || call.length < 3) return null;

      // Generate exchange data based on filename
      let exchange1 = '599';
      let exchange2 = '001';

      if (filename.includes('CQWW') || filename.includes('WPX')) {
        exchange1 = '599';
        exchange2 = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
      } else if (filename.includes('FieldDay') || filename.includes('FDGOTA')) {
        exchange1 = '3A';
        exchange2 = 'OR';
      } else if (filename.includes('SST')) {
        exchange1 = '599';
        exchange2 = '001';
      }

      return {
        call,
        exchange1,
        exchange2,
        userText: ''
      };
    } catch (error) {
      console.warn('Error parsing call from line:', line, error);
      return null;
    }
  }

  private generateSampleData(filename: string): ContestCall[] {
    // Generate sample data based on the filename
    const sampleData: ContestCall[] = [];
    
    // Generate 100 sample callsigns
    for (let i = 1; i <= 100; i++) {
      const call = this.generateCallSign();
      const exchange1 = this.generateExchange1(filename);
      const exchange2 = this.generateExchange2(filename);
      
      sampleData.push({
        call,
        exchange1,
        exchange2,
        userText: ''
      });
    }

    return sampleData;
  }

  private generateCallSign(): string {
    const prefixes = ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W0'];
    const suffixes = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ'];
    
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    
    return `${prefix}${suffix}`;
  }

  private generateExchange1(filename: string): string {
    if (filename.includes('CQWW') || filename.includes('WPX')) {
      return '599';
    } else if (filename.includes('FieldDay') || filename.includes('FDGOTA')) {
      const classes = ['1A', '2A', '3A', '4A', '5A', '6A', '7A', '8A', '9A'];
      return classes[Math.floor(Math.random() * classes.length)];
    } else if (filename.includes('SST')) {
      const names = ['DAVID', 'JOHN', 'MARY', 'TOM', 'SARA', 'MIKE', 'LISA', 'BOB'];
      return names[Math.floor(Math.random() * names.length)];
    }
    return '599';
  }

  private generateExchange2(filename: string): string {
    if (filename.includes('CQWW')) {
      return (Math.floor(Math.random() * 40) + 1).toString();
    } else if (filename.includes('WPX')) {
      return (Math.floor(Math.random() * 999) + 1).toString().padStart(3, '0');
    } else if (filename.includes('FieldDay') || filename.includes('FDGOTA')) {
      const sections = ['OR', 'CA', 'WA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'MI'];
      return sections[Math.floor(Math.random() * sections.length)];
    } else if (filename.includes('SST')) {
      const sections = ['OR', 'CA', 'WA', 'TX', 'FL', 'NY', 'IL', 'PA', 'OH', 'MI'];
      return sections[Math.floor(Math.random() * sections.length)];
    }
    return '001';
  }

  // Load specific contest data
  async loadCQWWData(): Promise<ContestCall[]> {
    return this.loadContestData('CQWWCW.txt');
  }

  async loadWPXData(): Promise<ContestCall[]> {
    return this.loadContestData('CQWWCW.txt'); // Using CQWW data for now
  }

  async loadFieldDayData(): Promise<ContestCall[]> {
    return this.loadContestData('FDGOTA.txt');
  }

  async loadSSTData(): Promise<ContestCall[]> {
    return this.loadContestData('SST.txt');
  }

  // Clear cache
  clearCache(): void {
    this.dataCache.clear();
  }
}

export default new DataLoader();
